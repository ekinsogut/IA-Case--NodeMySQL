//Response for get operations
exports.getResponse = (res, data) => {
  if (data.length === 0) {
    res.status(403).json({
      message: 'Kayıt bulunamadı.',
    });
  }
  res.status(200).json(data);
};

//Catching Error
exports.getError = (err, res) => {
  if (err.code === 'ECONNREFUSED') {
    res.status(500).json({
      message: 'Sunucu hatası. Lütfen tekrar deneyin.',
    });
  }

  console.log(err);
};
