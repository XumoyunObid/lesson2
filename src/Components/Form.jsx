import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { request } from "../config/request";
import { toast } from "react-toastify";

const Form = () => {
  const { reset, handleSubmit, register } = useForm();

  const submit = (data) => {
    request
      .post("/messages", data)
      .then((res) => {
        toast.success("Message created successfully !");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error");
      });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <TextField
          placeholder="Message"
          fullWidth
          sx={{ mb: "10px" }}
          {...register("name", { required: true })}
        />
      </div>
      <Button type="submit" variant="contained">
        Create
      </Button>
    </form>
  );
};

export default Form;
