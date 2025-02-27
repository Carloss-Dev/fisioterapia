import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { Modal } from "@components/Modal/Modal";
import { Table } from "@components/Table/Table";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { createColumnHelper } from "@tanstack/react-table";
import { LocalStorageDB } from "@utils/localStorageDB.utils";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const tagSchema = z.object({
  id: z.number().optional(),
  tag: z
    .string()
    .min(2, "Mínimo de 2 caracteres")
    .max(20, "Máximo de 20 caracteres"),
});

// Nesse trecho é criada uma interface seguindo como esquema, o esquema do zod criado acima
interface ITagFormData extends z.infer<typeof tagSchema> {}

export const TagsRegister = () => {
  const localDB = new LocalStorageDB<ITagFormData>("tags");

  const [modal, setModal] = React.useState(false);
  const [tags, setTags] = React.useState<ITagFormData[]>();

  React.useEffect(() => {
    if (!modal) {
      const DBtags = localDB.getAll();
      setTags(DBtags);
      return;
    }
  }, [localDB.getAll, modal]);

  React.useEffect(() => {
    console.log(tags);
  }, [tags]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ITagFormData>({
    resolver: zodResolver(tagSchema),
  });

  function onSubmit(data: ITagFormData) {
    localDB.create(data);
    setModal(false);
    reset();
  }

  const columnHelper = createColumnHelper<ITagFormData>();

  const columns = [
    columnHelper.accessor("tag", {
      header: "Tag",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: "Ações",
      cell: ({ row }) => (
        <div className="flex w-fit p-2">
          <Icon
            icon="lucide:edit"
            width="2em"
            height="2em"
            className="cursor-pointer"
          />{" "}
        </div>
      ),
    }),
  ];

  return (
    <section className="col-span-12 flex flex-col items-center justify-center gap-3 p-6">
      <Button className="h-10 w-60" onClick={() => setModal(true)}>
        Criar Nova Tag
      </Button>
      <Table data={tags ?? []} columns={columns} />
      <Modal
        active={modal}
        setActive={setModal}
        title="Cadastrar Tags"
        description="Formulário para cadastro de tags"
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
