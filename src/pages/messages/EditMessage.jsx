import { Stack, Typography } from "@mui/material";
import Card from "../../Components/Card";
import { useEffect, useState } from "react";
import { request } from "../../config/request";

const EditMessage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    request.get("/messages").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div>
      <Stack>
        <Typography variant="h4" mb="20px">
          Edit Message
        </Typography>
        {data.map((obj) => (
          <Card key={obj.id} {...obj} />
        ))}
      </Stack>
    </div>
  );
};

export default EditMessage;
