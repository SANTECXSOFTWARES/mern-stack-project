module.exports = (sequelize, DataTypes) => {
    const Teachers = sequelize.define("Teachers", {
      firtsName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      mobile: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
    return Teachers;
  };
  