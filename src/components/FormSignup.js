import React from 'react';
import validate from './validateValues';
import useForm from './useForm';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, select } = useForm(
    submitForm,
    validate,
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          How about traveling in time and space? Get started today! Sign up to
          live fantastic trips!
        </h1>
        <div className="form-inputs">
          <div className="form-sides">
            <div className="form-side">
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                value={values.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <p>{errors.firstname}</p>}
            </div>
            <div className="form-side">
              <label className="form-label">Last Name</label>
              <input
                className="form-input"
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                value={values.lastname}
                onChange={handleChange}
              />
              {errors.lastname && <p>{errors.lastname}</p>}
            </div>
          </div>
        </div>
        <div className="form-inputs">
          <label className="form-label">
            Genre <span>(optional)</span>
          </label>
          <select
            value={select}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select</option>
            <option value="male" className="select-option">
              Male
            </option>
            <option value="female" className="select-option">
              Female
            </option>
            <option value="other" className="select-option">
              Other
            </option>
          </select>
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <div className="form-sides">
            <div className="form-side">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-side">
              <label className="form-label">Check</label>
              <input
                className="form-input"
                type="password"
                name="password2"
                placeholder="Confirm your password"
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
          </div>
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already a Doctor companion? Login <a href="#">here</a>
        </span>
      </form>
    </>
  );
};

export default FormSignup;
