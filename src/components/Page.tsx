import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  FormControl,
  Container,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
}));

const Page = () => {
  const classes = useStyles();

  const [categories, setCategories] = useState<
    {
      label: string;
      id: number;
      category?: number;
      selected?: boolean;
    }[]
  >([
    { label: 'Eletronics', id: 1 },
    { label: 'Clothing', id: 1 },
    { label: 'Office', id: 1 },
  ]);

  const [products, setProducts] = useState<
    {
      label: string;
      id: number;
      category?: number;
      selected?: boolean;
    }[]
  >([
    { label: 'TV', id: 1, category: 1 },
    { label: 'Monitor', id: 1, category: 1 },
    { label: 'Notebook', id: 1, category: 1 },
    { label: 'T Shirt', id: 1, category: 2 },
    { label: 'Pants', id: 1, category: 2 },
    { label: 'Shoe', id: 1, category: 2 },
    { label: 'Chair', id: 1, category: 3 },
    { label: 'Table', id: 1, category: 3 },
    { label: 'Desk', id: 1, category: 3 },
  ]);

  const setters = {
    categories: setCategories,
    products: setProducts,
  };

  const collections = { categories, products };

  const onChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    const name = event.target.name as 'categories' | 'products';
    const value = event.target.value;
    const setCollection = setters[name];
    const collection = collections[name].map((item) => ({
      ...item,
      selected: false,
    }));
    const index = collection.findIndex(
      (item) => item.id === +(value as string),
    );
    collection[index] = { ...collection[index], selected: true };
    setCollection(collection);
  };

  const category = categories.find((category) => category.selected) || {
    id: '',
  };
  const product = products.find((product) => product.selected) || { id: '' };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <FormControl className={classes.control}>
          <InputLabel htmlFor="categories">Category</InputLabel>
          <Select
            value={category.id}
            onChange={onChange}
            inputProps={{ name: 'categories', id: 'categories' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.control} disabled={category.id === ''}>
          <InputLabel htmlFor="Products">Product</InputLabel>
          <Select
            value={product.id}
            onChange={onChange}
            inputProps={{ name: 'products', id: 'values' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {products
              .filter((product) => product.category === category.id)
              .map((product) => (
                <MenuItem key={product.id} value={product.id}>
                  {product.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Container>
    </div>
  );
};

export default Page;
