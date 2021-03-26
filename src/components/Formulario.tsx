import { useForm } from "../hooks/useForm";

interface FormData {
  name: string;
  email: string;
  age: number;
}

export const Formulario = () => {
  const { email, name, age, form, handleChange } = useForm<FormData>({
    email: "nico@test.com",
    name: "nicolas",
    age: 21,
  });

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          onChange={handleChange}
          className="form-control"
          value={email}
          name="email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">name:</label>
        <input
          type="text"
          onChange={handleChange}
          className="form-control"
          value={name}
          name="name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">age:</label>
        <input
          type="text"
          onChange={handleChange}
          className="form-control"
          value={age}
          name="age"
        />
      </div>
      <pre>{JSON.stringify(form, null, 4)}</pre>
    </form>
  );
};
