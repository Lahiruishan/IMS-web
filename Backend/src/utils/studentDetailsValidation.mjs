// Student registration validation
export const studentValidation = {
    full_name: {
        isLength: {
            options: {
                min: 5,
                max: 32
            },
            errorMessage: "Name Error"
        },
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "String"
        }
    },
    email: {
        isEmail: {
            errorMessage: "email"
        },
        notEmpty: {
            errorMessage: "Empty"
        }
    },
    pwd: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "String"
        }
    },
    school: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "Empty"
        }
    },
    district: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "Empty"
        }
    },
    stream_id: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "Empty"
        }
    },
    batch_id: {
        isLength: {
            options: {
                min: 4,
                max: 4
            },
            errorMessage: "Phone Error"
        },
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "Empty"
        }
    },
    gender: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "Empty"
        }
    },
    phone: {
        isLength: {
            options: {
                min: 10,
                max: 12
            },
            errorMessage: "Phone Error"
        },
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "String"
        }
    }
}

// Student login validation
export const studentLoginValidation = {
    email: {
        isEmail: {
            errorMessage: "email"
        },
        notEmpty: {
            errorMessage: "Empty"
        }
    },
    pwd: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "String"
        }
    }
}

// Student details update validation
export const studentUpdateValidation = {
    full_name: {
        isLength: {
            options: {
                min: 5,
                max: 32
            },
            errorMessage: "Name Error"
        },
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "String"
        }
    },
    email: {
        isEmail: {
            errorMessage: "email"
        },
        notEmpty: {
            errorMessage: "Empty"
        }
    },
    pwd: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "String"
        }
    },
    school: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "Empty"
        }
    },
    district: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "Empty"
        }
    },
    gender: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "Empty"
        }
    },
    batch_id: {
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "Empty"
        }
    },
    phone: {
        isLength: {
            options: {
                min: 10,
                max: 12
            },
            errorMessage: "Phone Error"
        },
        notEmpty: {
            errorMessage: "Empty"
        },
        isString: {
            errorMessage: "String"
        }
    }
}