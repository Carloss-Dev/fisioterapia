import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type InputType = "text" | "password" | "email";

interface IPropsInput<T extends FieldValues> {
  id?: string;
  name: Path<T>;
  label: string;
  type: InputType;
  placeholder?: string;
  className?: string;
  required?: boolean;
  register: UseFormRegister<T>;
  errors?: FieldError;
}

export const Input = <T extends FieldValues>({
  id,
  label,
  placeholder,
  name,
  type,
  className,
  required,
  register,
  errors,
}: IPropsInput<T>) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label
        htmlFor={id}
        className="text-md inline-flex justify-between font-bold tracking-wider"
      >
        {label} {required && "*"}
        <span className="block self-end text-sm text-red-500">
          {errors?.message}
        </span>
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, { required })}
        className="focus:border-primary ease h-11 w-full rounded-sm border-1 border-neutral-500 p-3 text-base outline-0 transition-all duration-100 focus:shadow-md"
      />
    </div>
  );
};
