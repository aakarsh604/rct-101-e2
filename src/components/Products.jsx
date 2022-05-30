import React, {useState}from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import { useEffect } from "react";
import axios from "axios";
import styles from "../components/Form.module.css";

const Products = () => {
  const [form, setform] = useState([]);
  const [page, setpage] = useState(1);
  const [total, settotal] = useState(0);
  const [limit, setlimit] = useState(3);

  useEffect(()=> {
    const getData = async () => {
      const res = await axios(`http://localhost:8080/products?_page=${page}&_limit=${limit}`);
      setform(res.data)
      settotal(res.headers["x-total-count"]);
      }
      getData();
    },[page, limit])

  return (
    <Flex className={styles.flex}>
      <AddProduct setForm={setform} form={form}/>
      <Grid className={styles.grid}>
        <Product form={form}/>
      </Grid>
      <Pagination setpage={setpage} total={total} page={page} limit={limit} setlimit={setlimit}/>
    </Flex>
  );
};

export default Products;
