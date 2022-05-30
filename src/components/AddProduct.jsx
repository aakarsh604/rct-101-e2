import React from "react";
import { Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";
import { Modal, ModalBody } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const AddProduct = ({form, setForm}) => {

  const handleOnChange = (e) => {
    let { checked, type, name, value, files } = e.target;
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} size="md">
        Add New Product
      </Button>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" name="title" handleOnChange={handleOnChange}/>
          <Select data-cy="add-product-category" name="category" handleOnChange={handleOnChange}>
            <option hidden>Category</option>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" name="gender"  handleOnChange={handleOnChange}>
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="Price" handleOnChange={handleOnChange}/>
          <Button data-cy="add-product-submit-button" onClick={onClose}>Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
