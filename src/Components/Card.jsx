import { IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { request } from "../config/request";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Card = ({ id, name }) => {
  const [data, setData] = useState([]);
  const handleDelete = (id) => {
    request
      .delete(`/messages/${id}`)
      .then((res) => {
        toast.success("Message deleted successfully");
        setData(res.data);
      })
      .finally(() => {
        request.get("/messages").then((res) => {
          setData(res.data);
        });
      });
    // console.log(data);
  };
  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      border={"2px solid blue"}
      mb="15px"
      p="10px"
    >
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`edit/message/${id}`}
      >
        <Typography variant="h5">{name}</Typography>
      </Link>
      <IconButton
        type="button"
        variant="danger"
        sx={{ width: "30px", height: "30px", color: "red" }}
        onClick={() => handleDelete(id)}
      >
        x
      </IconButton>
    </Stack>
  );
};

export default Card;
