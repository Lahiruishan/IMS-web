export const batchValidation = {
    batch_id: {
        isLength: {
            options: {
                min: 4,
                max: 4
            },
            errorMessage: "batch"

        },
        notEmpty: {
            errorMessage: "batch"
        }
    }
}