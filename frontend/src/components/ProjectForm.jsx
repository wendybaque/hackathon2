/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./ProjectForm.css";

export default function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} className="project_form">
        <h1 className="new_project">Add a new project</h1>
        <label htmlFor="project_name" className="project_label">
          Project Name
          <input
            required
            className="project_input"
            type="text"
            placeholder="Project name"
            name="project_name"
            {...register("project_name", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </label>
        <label htmlFor="poject_descr" className="project_label">
          Project description
          <textarea
            required
            className="project_input"
            type="text"
            rows="3"
            placeholder="Project description"
            name="poject_descr"
            {...register("poject_descr", { required: true, maxLength: 20 })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </label>

        <label htmlFor="technology" className="project_label">
          Technologies used
          <select className="project_input" required multiple>
            <option value="Javascript">Javascript</option>
            <option value="React">React</option>
            <option value="PHP">PHP</option>
            <option value="Synfony">Synfony</option>
            <option value="Synfony">Angular</option>
            <option value="Synfony">Java</option>
            <option value="Synfony">C#</option>
          </select>
        </label>
        <label htmlFor="project_name" className="project_label">
          Required soft skills
          <input
            required
            className="project_input"
            type="text"
            placeholder="Required skills (ex: agility, communication, english... )"
            name="skills"
            {...register("skills", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </label>

        <label htmlFor="project_coord" className="project_label">
          Project coordinator
          <input
            required
            className="project_input"
            type="text"
            placeholder="Project'coordinator's name"
            name="project_coord"
            {...register("project_coord", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </label>
        <div className="client_agency">
          <label htmlFor="client_name" className="project_label">
            Client name
            <input
              required
              className="project_input"
              type="text"
              placeholder="Client name"
              name="client_name"
              {...register("client_name", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </label>
          <label htmlFor="agency_name" className="project_label">
            Agency name
            <input
              required
              className="project_input"
              type="text"
              placeholder="Agency name"
              name="agency_name"
              {...register("agency_name", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </label>
        </div>
        <div className="project_date">
          <label htmlFor="start_date" className="start_date">
            Project start date
            <input
              required
              type="date"
              name="startdate"
              {...register("start_date", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </label>
          <label htmlFor="end_date" className="end_date">
            Project end date
            <input
              required
              type="date"
              name="endl_date"
              {...register("end_date", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </label>
        </div>
        <div className="button_form">
          <Link to="/">
            <button type="submit"> SAVE THE PROJECT </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
