type InputType = "text" | "password" | "email";

interface IPropsInput {
  id?: string;
  name?: string;
  label: string;
  type: InputType;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export const Input = ({
  id,
  label,
  placeholder,
  name,
  type,
  className,
  required,
}: IPropsInput) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={id} className="text-md font-bold tracking-wider">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        className="focus:border-primary ease h-11 w-full rounded-sm border-1 border-neutral-500 p-3 text-base outline-0 transition-all duration-100 focus:shadow-md"
      />
    </div>
  );
};
