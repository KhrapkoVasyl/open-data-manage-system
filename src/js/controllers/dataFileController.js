const DataFile = require('../db/models/DataFile');

exports.getAllDataFiles = async (req, reply) => {
  try {
    let files = await DataFile.findAll();

    reply.status(200).send({
      status: 'success',
      results: files.length,
      data: {
        files,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllDataFilesInDataSet = async (req, res) => {
  try {
    let files = await DataFile.findAll({
      where: {
        dataSet: req.params.id,
      },
    });

    res.status(200).send({
      status: 'success',
      results: files.length,
      data: {
        files,
      },
    });
  } catch (err) {
    res.status(404).send({
      status: 'fail',
      message: err,
    });
  }
};

exports.getDataFile = async (req, res) => {
  try {
    const file = await DataFile.findOne({
      where: {
        id: req.params.fileId,
        dataSet: req.params.id,
      },
    });

    if (!file) {
      throw 'Datafile with the specified ID was not found in this Dataset';
    }

    res.status(200).send({
      status: 'success',
      data: {
        file,
      },
    });
  } catch (err) {
    res.status(404).send({
      status: 'fail',
      message: err,
    });
  }
};

exports.createDataFile = async (req, res) => {
  try {
    req.body.dataSet = +req.params.id;
    const newFile = await DataFile.create(req.body);

    res.status(201).send({
      status: 'success',
      data: {
        newFile,
      },
    });
  } catch (err) {
    res.status(400).send({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateDataFile = async (req, res) => {
  try {
    const { id, fileId } = req.params;
    const [updated] = await DataFile.update(req.body, {
      where: { id: +fileId, dataSet: +id },
    });

    const updatedFile = await DataFile.findOne({
      where: { id: fileId },
    });

    if (!updated)
      throw 'Datafile with the specified ID was not found in this Dataset';

    res.status(200).send({
      status: 'success',
      data: {
        updatedFile,
      },
    });
  } catch (err) {
    res.status(404).send({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteDataFile = async (req, res) => {
  try {
    const { id, fileId } = req.params;
    const deleted = await DataFile.destroy({
      where: {
        id: fileId,
        dataSet: id,
      },
    });
    if (!deleted)
      throw 'Datafile with the specified ID was not found in this Dataset';

    res.status(200).send({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).send({
      status: 'fail',
      message: err,
    });
  }
};
