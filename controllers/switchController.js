// import model
import Switch from "../models/switch.js";

// GET Switches with Pagination
export const getSwitchesWithPagination = async (req, res) => {
  const query = req.body;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;
  const results = {};
  
  if(query && page){
    try {
      results.results = await Switch.find({
        ...query.type ? { type: query.type } : {},
        ...query.loudness ? { loudness: query.loudness } : {},
        ...query.mount ? { mount: query.mount } : {},
        ...query.manufacturer ? { manufacturer: query.manufacturer } : {},
      })
      .sort({ _id: 1 })
      .limit(limit)
      .skip(skipIndex)
      .exec();
      res.paginatedResults = results;
      
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  else{
    try {
      results.results = await Switch.find({
        ...query.type ? { type: query.type } : {},
        ...query.loudness ? { loudness: query.loudness } : {},
        ...query.mount ? { mount: query.mount } : {},
        ...query.manufacturer ? { manufacturer: query.manufacturer } : {},
      })
      .sort({ _id: 1 })
      
      res.results = results;
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  };
  
// GET single Switch
export const getSwitchById = async (req, res) => {
  try {
    const _switch = await Switch.findById(req.params.id);
    res.json(_switch);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a Switch
export const saveSwitch = async (req, res) => {
  const _switch = new Switch(req.body);
  try {
    const savedSwitch = await _switch.save();
    res.status(201).json(savedSwitch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a Switch
export const updateSwitch = async (req, res) => {
  const _switch = await Switch.findById(req.params.id);
  if (!_switch) return res.status(404).json({ message: "No Data Found" });
  try {
    const updatedSwitch = await Switch.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedSwitch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Switch
export const deleteSwitch = async (req, res) => {
  const _switch = await Switch.findById(req.params.id);
  if (!_switch) return res.status(404).json({ message: "No Data Found" });
  try {
    const deletedProduct = await Switch.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
