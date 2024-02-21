import { Stack, Typography } from "@mui/material";
import Card from "../../Components/Card";
import { useEffect, useState } from "react";
import { request } from "../../config/request";
import LogOutBtn from "../../Components/LogOutBtn";
import { useParams } from "react-router-dom";

const EditMessage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    request.get("/messages").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  const { id } = useParams();
  const message = data.find((message) => message.id === parseInt(id));
  return (
    <div>
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" mb="20px">
            Edit Message
          </Typography>
          <LogOutBtn />
        </Stack>
      </Stack>
    </div>
  );
};

export default EditMessage;
