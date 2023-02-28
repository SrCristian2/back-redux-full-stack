import { response } from "../helpers/response.js";
import { postModel } from "../models/post.model.js";

const postCtrl = {};

postCtrl.create = async (req, reply) => {
  try {
    const data = await postModel.create(req.body);
    response(reply, 201, true, data, "post creado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

postCtrl.listAll = async (req, reply) => {
  try {
    const data = await postModel.find();
    response(reply, 200, true, data, "posts list");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

postCtrl.listById = async (req, reply) => {
  try {
    const { id } = req.params;
    const data = await postModel.findById(id);
    response(reply, 200, true, data, "post found");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

postCtrl.delete = async (req, reply) => {
  try {
    const { id } = req.params;
    const data = await postModel.findById(id);

    if (!data) {
      return response(reply, 404, false, "", "post not found");
    }

    await data.deleteOne();
    response(reply, 200, true, "", "post delete");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

postCtrl.update = async (req, reply) => {
  try {
    const { id } = req.params;
    const data = await postModel.findById(id);

    if (!data) {
      return response(reply, 404, false, "", "post not found");
    }

    await data.updateOne(req.body);
    response(reply, 200, true, "", "post delete");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

export default postCtrl;
