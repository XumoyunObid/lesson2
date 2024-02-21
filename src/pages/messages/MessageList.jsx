import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { request } from "../../config/request";
import Card from "../../Components/Card";

const MessageList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    request.get("/messages").then((res) => {
      setData(res.data);
    });
  }, [data]);
  // console.log(data);
  return (
    <Stack>
      <Typography variant="h4" mb="20px">
        Message List
      </Typography>
      {data.map((obj) => (
        <Card key={obj.id} {...obj} />
      ))}
    </Stack>
  );
};

export default MessageList;
