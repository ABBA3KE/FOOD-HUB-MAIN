
import Food from "../models/Food.js";

export const createFood = async (req, res) => {
  try {
    const { name, description, price, category, images } = req.body;
    const food = await Food.create({ name, description, price, category, images });
    res.status(201).json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
