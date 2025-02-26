import { Button } from "@components/Button/Button";
import { Form } from "@components/Form/Form";
import { Input } from "@components/Input/Input";
import { LocalStorageDB } from "@utils/localStorageDB.utils";
import type React from "react";

interface ITag {
  tag: string;
}

export const TagsRegister = () => {
  const localDB = new LocalStorageDB<ITag>("tags");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("aoba");

    localDB.create({
      tag: "aoba",
    });
  }

  return (
    <section className="col-span-12 flex justify-center p-8">
      <Form onSubmit={handleSubmit}>
        <Input
          label="Tag"
          type="text"
          id="name"
          placeholder="Digite a Tag"
          className="w-80"
        />
        <Button type="submit" className="h-10">
          Cadastrar
        </Button>
      </Form>
    </section>
  );
};
