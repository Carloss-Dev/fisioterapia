import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

// Record é um tipo utilitário do TS, ele permite definirmos o tipo de uma chave e o tipo de um valor
interface IPropsTable<T> {
  data?: T[];
  columns: ColumnDef<T, string>[];
  titleContent?: React.ReactNode;
}

//? Exemplo de como montar a estrutura abaixo:
// interface IExample {
//   nome: string;
//   idade: string;
// }
// const dataExample: IExample[] = [
//   {
//     nome: "Carlos",
//     idade: "18",
//   },
//   {
//     nome: "Gustavinho",
//     idade: "21 - 28",
//   },
// ];
// const columnHelper = createColumnHelper<IExample>();

// const columnExample = [
//   columnHelper.accessor("nome", {
//     header: "Nome",
//     cell: (info) => info.renderValue(),
//   }),
//   columnHelper.accessor("idade", {
//     header: "Idade",
//     cell: (info) => info.renderValue(),
//   }),
// ];

export const Table = <T,>({ columns, data, titleContent }: IPropsTable<T>) => {
  const tableColumns = React.useMemo(() => (columns ? columns : []), [columns]);

  const tableData = React.useMemo(
    () => (data && data.length > 0 ? data : []),
    [data]
  );

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="col-span-8 h-fit w-fit rounded-lg border border-gray-200 bg-white p-4">
      {titleContent && (
        <div className="flex justify-end p-1">{titleContent}</div>
      )}
      <div className="w-fit overflow-hidden rounded-lg border border-gray-300">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-lg font-bold tracking-wide text-gray-600"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-100">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-t border-gray-300 transition-colors hover:bg-gray-50"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="text-md px-4 py-3 whitespace-nowrap text-gray-700"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
