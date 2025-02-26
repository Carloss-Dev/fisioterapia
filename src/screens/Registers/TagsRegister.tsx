import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { Modal } from "@components/Modal/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocalStorageDB } from "@utils/localStorageDB.utils";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const tagSchema = z.object({
  tag: z
    .string()
    .min(2, "Mínimo de 2 caracteres")
    .max(20, "Máximo de 20 caracteres"),
});

// Nesse trecho é criada uma interface seguindo como esquema, o esquema do zod criado acima
interface TagFormData extends z.infer<typeof tagSchema> {}

export const TagsRegister = () => {
  const localDB = new LocalStorageDB<TagFormData>("tags");
  const [modal, setModal] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TagFormData>({
    resolver: zodResolver(tagSchema),
  });

  function onSubmit(data: TagFormData) {
    localDB.create(data);
    setModal(false);
    reset();
  }

  return (
    <section className="col-span-12 flex justify-center p-8">
      <Modal
        active={modal}
        setActive={setModal}
        title="Cadastrar Tags"
        description="Formulário para cadastro de tags"
        modalButton={<Button className="h-10 w-60">Abrir Modal</Button>}
        content={
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center gap-4"
          >
            <div className="flex flex-col">
              <Input
                label="Tag"
                type="text"
                id="tag"
                register={register}
                errors={errors?.tag}
                placeholder="Digite a Tag"
                className="w-full"
                {...register("tag")}
              />
            </div>

            <Button type="submit" className="mt-6 h-10 w-60 self-end">
              Cadastrar
            </Button>
          </form>
        }
      />
    </section>
  );
};
