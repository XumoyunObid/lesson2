import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { toast } from "react-toastify";
import { loadState, saveState } from "../../lib/Storage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    reset,
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const naviagte = useNavigate();
  const submit = (data) => {
    request
      .post("/login", data)
      .then((res) => {
        saveState("user", res.data);
        toast.success("Logged in successfully");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error");
        localStorage.clear("user");
      })
      .finally(() => {
        if (loadState("user")) {
          naviagte("/app", { replace: true });
        }
      });
    reset();
  };
  return (
    <Stack
      sx={{
        position: "absolute",
        inset: 0,
        bgcolor: "#0074E9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack width="500px" bgcolor="#fff" borderRadius="15px">
        <Stack p="30px">
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <TextField
                placeholder="Email"
                fullWidth
                sx={{ mb: "10px" }}
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <TextField
                placeholder="Password"
                fullWidth
                sx={{ mb: "10px" }}
                {...register("password", { required: true })}
              />
            </div>
            <Button
              style={{ marginBlock: "10px" }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
