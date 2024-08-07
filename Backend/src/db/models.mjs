import { Sequelize } from 'sequelize';
import db from "./index.mjs";

// Students table
const Student = db.define('Students', {
    reg_no: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    full_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    batch_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    stream_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    district: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    school: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    pwd: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    profile_pic: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        defaultValue: "Generic Pic Location"
    }
});

// Batch(A/L) table
const Batch = db.define('Batches', {
    batch_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    }
});

// Subject table
const Subject = db.define('Subjects', {
    sub_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

// Stream table
const Stream = db.define('Streams', {
    stream_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

// Staff table
const Staff = db.define('Staffs', {
    staff_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    full_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    sub_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    pwd: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    profile_pic: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        defaultValue: "Generic Staff Pic Location"
    }
});

// Admins table
const Admin = db.define('Admins', {
    admin_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    full_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    gender: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    pwd: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    profile_pic: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        defaultValue: "Generic Staff Pic Location"
    }
});

// Staff phone numbers table
const Staff_Phone = db.define('Staff_Phones', {
    staff_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    phone: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
});

// Classes table
const Class = db.define('Classes', {
    class_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    batch_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    sub_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    staff_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    fee: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    location: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    day: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false
    }
});

// Student Classes relation table
const Student_Class = db.define('Student_Classes', {
    reg_no: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    class_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    enroll_date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    pay_date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
    }
});

// Staff payments table
const Staff_Pay = db.define('Staff_Payments', {
    payment_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    staff_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    admin_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    amount: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    }
});

// Streams and subjects relation table
const Stream_Subject = db.define('Stream_Subjects', {
    stream_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    sub_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
});

// Contents table
const Content = db.define('Contents', {
    content_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    class_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    comments: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
    }
});

// Topics table
const Topic = db.define('Topics', {
    topic_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    content_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

// Topic files table
const Topic_File = db.define('Topic_Files', {
    topic_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    file_path: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

// Assignments table
const Assignment = db.define('Assignments', {
    ass_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    content_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    start_date_time: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    due_date_time: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
    },
    file_path: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

// Student answers for assignments table
const Answer = db.define('Assignment_Answers', {
    reg_no: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    ass_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    ans_date_time: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    ans_path: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    marks: {
        type: Sequelize.DataTypes.DECIMAL(5, 2),
        allowNull: false
    }
});

// Student parent details table
const Parent = db.define('Parents', {
    reg_no: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    parent_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    phone_no: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})

// Frontend details table
const Front_Detail = db.define('Front_Details', {
    detail_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    file_path: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

export default { 
    Batch,
    Student,
    Subject,
    Stream,
    Staff,
    Admin,
    Staff_Phone,
    Class,
    Student_Class,
    Staff_Pay,
    Stream_Subject,
    Content,
    Topic,
    Topic_File,
    Assignment,
    Answer,
    Parent,
    Front_Detail
};