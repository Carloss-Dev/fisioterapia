import { Button } from "@components/Button/Button";
import { Form } from "@components/Form/Form";
import { Input } from "@components/Input/Input";

export const Tags = () => {
  return (
    <section className="col-span-12 flex justify-center p-8">
      <Form>
        <Input
          label="Público Alvo"
          type="text"
          id="name"
          placeholder="Digite o público alvo"
          className="w-80"
        />
        <Button className="h-10">Cadastrar</Button>
      </Form>
    </section>
  );
};
