/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";

import "./ProjectForm.css";

export default function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="project_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="project_name" className="project_input">
          Project Name
          <input
            type="text"
            placeholder="Project name"
            name="project_name"
            {...register("project_name", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </label>
        <label htmlFor="poject_descr" className="project_input">
          Project description
          <textarea
            type="text"
            rows="6"
            placeholder="Project description"
            name="poject_descr"
            {...register("poject_descr", { required: true, maxLength: 20 })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </label>
        <label htmlFor="technology" className="project_form">
          Technologies used
          <select>
            <option value="Javascript">Javascript</option>
            <option value="React">React</option>
            <option value="PHP">PHP</option>
            <option value="Synfony">Synfony</option>
            <option value="Synfony">Angular</option>
            <option value="Synfony">Java</option>
            <option value="Synfony">C#</option>
          </select>
        </label>
        <label htmlFor="project_coord" className="project_input">
          Project coordinator
          <input
            type="text"
            placeholder="Name of thproject coordinator"
            name="project_coord"
            {...register("project_coord", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </label>
        <label htmlFor="client_name" className="project_input">
          Client name
          <input
            type="text"
            placeholder="Client name"
            name="client_name"
            {...register("client_name", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </label>
        <label htmlFor="agency_name" className="project_input">
          Agency name
          <input
            type="text"
            placeholder="Agency name"
            name="agency_name"
            {...register("agency_name", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </label>
        <div className="project_date">
          <label htmlFor="start_date" className="start_date">
            Project start date
            <input
              type="date"
              name="startdate"
              {...register("start_date", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </label>
          <label htmlFor="end_date" className="end_date">
            Project end date
            <input
              type="date"
              name="endl_date"
              {...register("end_date", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </label>
        </div>
        <button type="submit" className="button_form">
          {" "}
          SAVE THE PROJECT{" "}
        </button>
      </form>
    </div>
  );
}
