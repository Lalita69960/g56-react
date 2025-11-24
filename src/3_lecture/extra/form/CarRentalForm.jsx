import React from "react";
import {useForm} from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";


// https://react-hook-form.com/docs/useform/reset
// https://react-hook-form.com/docs/useform/watch

const CarRentalForm = () => {
    const {
        register, // register is a function to bind inputs to the form state and validation
        handleSubmit, // handleSubmit is a function to handle the form submission
        watch, // watch is a function to watch the value of a specific field and used when you need to access the value of a field dynamically and react to changes
        reset, // reset is a function to reset the form to its default values
        formState: {errors},
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            carModel: "",
            startDate: "",
            endDate: "",
        },
        mode: "onTouched",
    });

    const startDate = watch("startDate");

    const onSubmit = (data) => {
        console.log("Rental Form Data:", data);
        alert("Your rental booking has been submitted!");
        reset(); // clear form after submit
    };

    const carModels = [
        {id: 1, name: "Sedan"},
        {id: 2, name: "SUV"},
        {id: 3, name: "Convertible"},
        {id: 4, name: "Truck"},
    ];

    return (
        <>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="p-4 border rounded bg-light" style={{minWidth: 360}}>
                    <h1 className="text-center mb-4">Car Rental Form</h1>

                    {/* react-hook-form handles validation before calling onSubmit */}
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        {/* Full Name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                {...register("name", {required: "Full Name is required"})}
                            />
                            {errors.name && (
                                <div className="invalid-feedback d-block">
                                    {errors.name.message}
                                </div>
                            )}
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                            />
                            {errors.email && (
                                <div className="invalid-feedback d-block">
                                    {errors.email.message}
                                </div>
                            )}
                        </div>

                        {/* Car Model */}
                        <div className="mb-3">
                            <label htmlFor="carModel" className="form-label">
                                Car Model
                            </label>
                            <select
                                id="carModel"
                                className={`form-select ${errors.carModel ? "is-invalid" : ""}`}
                                {...register("carModel", {
                                    required: "Please select a car model",
                                })}
                            >
                                <option value="">Select a car</option>
                                {carModels.map((car) => (
                                    <option key={car.id} value={car.name}>
                                        {car.name}
                                    </option>
                                ))}
                            </select>
                            {errors.carModel && (
                                <div className="invalid-feedback d-block">
                                    {errors.carModel.message}
                                </div>
                            )}
                        </div>

                        {/* Rental Start Date */}
                        <div className="mb-3">
                            <label htmlFor="startDate" className="form-label">
                                Rental Start Date
                            </label>
                            <input
                                id="startDate"
                                type="date"
                                className={`form-control ${errors.startDate ? "is-invalid" : ""}`}
                                {...register("startDate", {required: "Start date is required"})}
                            />
                            {errors.startDate && (
                                <div className="invalid-feedback d-block">
                                    {errors.startDate.message}
                                </div>
                            )}
                        </div>

                        {/* Rental End Date */}
                        <div className="mb-3">
                            <label htmlFor="endDate" className="form-label">
                                Rental End Date
                            </label>
                            <input
                                id="endDate"
                                type="date"
                                className={`form-control ${errors.endDate ? "is-invalid" : ""}`}
                                {...register("endDate", {
                                    required: "End date is required",
                                    validate: (value) => {
                                        if (!startDate || !value) return true;
                                        const start = new Date(startDate);
                                        const end = new Date(value);
                                        return end >= start || "End date cannot be before start date";
                                    },
                                })}
                            />
                            {errors.endDate && (
                                <div className="invalid-feedback d-block">
                                    {errors.endDate.message}
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary px-4 py-2">
                                Submit Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CarRentalForm;
