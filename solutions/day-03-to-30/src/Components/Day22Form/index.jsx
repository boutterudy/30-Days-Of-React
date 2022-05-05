import { useState } from "react";
import styles from "./style.module.scss";
const options = [
    {
        value: "",
        label: "-- Select Country--",
    },
    {
        value: "Finland",
        label: "Finland",
    },
    {
        value: "Sweden",
        label: "Sweden",
    },
    {
        value: "Norway",
        label: "Norway",
    },
    {
        value: "Denmark",
        label: "Denmark",
    },
];

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
    <option key={label} value={value}>
        {" "}
        {label}
    </option>
));

const Day22Form = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        country: "",
        tel: "",
        dateOfBirth: "",
        favoriteColor: "",
        weight: "",
        gender: "",
        file: "",
        bio: "",
        skills: {
            html: false,
            css: false,
            javascript: false,
        },
        touched: {
            firstName: false,
            lastName: false,
        },
    };
    const [formData, setFormData] = useState(initialState);

    const onChange = (e) => {
        /*
         we can get the name and value like: e.target.name, e.target.value
        Wwe can also destructure name and value from e.target
        const name = e.target.name
        const value = e.target.value
        */
        const { name, value, type, checked } = e.target;
        /*
        [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
        */

        if (type === "checkbox") {
            setFormData({
                ...formData,
                skills: { ...formData.skills, [name]: checked },
            });
        } else if (type === "file") {
            setFormData({ ...formData, [name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const validate = () => {
        // Object to collect error feedback and to display on the form
        const errors = {
            firstName: "",
            lastName: "",
            title: "",
            country: "",
            email: "",
            tel: "",
            dateOfBirth: "",
            favoriteColor: "",
            weight: "",
            gender: "",
            bio: "",
            errorCount: 0,
        };

        let counter = 0;

        // First name
        if (formData.firstName.length < 3 || formData.firstName.length > 12) {
            errors.firstName = "First name must be between 2 and 12 characters";
            counter += 1;
        }

        // Last name
        if (formData.lastName.length < 3 || formData.lastName.length > 12) {
            errors.lastName = "Last name must be between 2 and 12 characters";
            counter += 1;
        }

        // Title
        if (formData.title.length < 2 || formData.title.length > 32) {
            errors.title = "Title must be between 2 and 32 characters";
            counter += 1;
        }

        // Country
        if (formData.country === "") {
            errors.country = "Country should be selected";
            counter += 1;
        }

        // Email
        let emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = "Invalid email";
            counter += 1;
        }

        // Tel
        let telRegex = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
        if (!telRegex.test(formData.tel)) {
            errors.tel = "Invalid phone number";
            counter += 1;
        }

        // Date of birth
        let year = formData.dateOfBirth.split("-")[0];
        if (
            formData.dateOfBirth === "" ||
            year > new Date().getFullYear() ||
            year < new Date().getFullYear() - 140
        ) {
            errors.dateOfBirth = "Invalid date of birth";
            counter += 1;
        }

        // Fav color
        if (formData.favoriteColor === "") {
            errors.favoriteColor = "Color should be selected";
            counter += 1;
        }

        // Weight
        if (formData.weight <= 0 || formData.weight > 700) {
            errors.weight = "Invalid weight (in kg)";
            counter += 1;
        }

        // Gender
        if (
            formData.gender !== "Female" &&
            formData.gender !== "Male" &&
            formData.gender !== "Other"
        ) {
            errors.gender = "Gender should be selected";
            counter += 1;
        }

        // Bio
        if (formData.bio.length < 2 || formData.bio.length > 500) {
            errors.bio = "Bio must be between 2 and 500 characters";
            counter += 1;
        }

        // Error count
        errors.errorCount = counter;

        return errors;
    };

    // accessing the state value by destrutcturing the state
    const {
        firstName,
        lastName,
        title,
        country,
        email,
        tel,
        dateOfBirth,
        favoriteColor,
        weight,
        gender,
        bio,
    } = formData;

    const errors = validate();

    const onSubmit = (e) => {
        /*
         e.preventDefault()
         stops the default behavior of form element
         specifically refreshing of page
        */
        e.preventDefault();
        const {
            firstName,
            lastName,
            title,
            email,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            country,
            gender,
            bio,
            file,
            skills,
        } = formData;

        const formattedSkills = [];
        for (const key in skills) {
            console.log(key);
            if (skills[key]) {
                formattedSkills.push(key.toUpperCase());
            }
        }
        const data = {
            firstName,
            lastName,
            title,
            email,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            country,
            gender,
            bio,
            file,
            skills: formattedSkills,
        };
        /*
         the is the place where we connect backend api 
         to send the data to the database
         */
        if (errors.errorCount === 0) {
            console.log("Valid data", data);
        } else {
            console.log("Invalid data", data);
        }
    };
    const onBlur = (e) => {
        const { name } = e.target;
        setFormData({
            ...formData,
            touched: { ...formData.touched, [name]: true },
        });
    };

    return (
        <div className={styles.dayForm}>
            <h3>Add Student</h3>
            <form onSubmit={onSubmit}>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName">First Name </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder="First Name"
                        />
                        <br />
                        {errors.firstName && (
                            <small className={styles.error}>
                                {errors.firstName}
                            </small>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder="Last Name"
                        />
                        <br />
                        {errors.lastName && (
                            <small className={styles.error}>
                                {errors.lastName}
                            </small>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Title </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                            value={title}
                            onChange={onChange}
                        />
                        <br />
                        {errors.title && (
                            <small className={styles.error}>
                                {errors.title}
                            </small>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Email"
                        />
                        <br />
                        {errors.email && (
                            <small className={styles.error}>
                                {errors.email}
                            </small>
                        )}
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="tel">Telephone </label>
                    <input
                        type="tel"
                        id="tel"
                        name="tel"
                        value={tel}
                        onChange={onChange}
                        placeholder="Tel"
                    />
                    <br />
                    {errors.tel && (
                        <small className={styles.error}>{errors.tel}</small>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="dateOfBirth">Date of birth </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        onChange={onChange}
                        placeholder="Date of Birth"
                    />
                    <br />
                    {errors.dateOfBirth && (
                        <small className={styles.error}>
                            {errors.dateOfBirth}
                        </small>
                    )}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="favoriteColor">Favorite Color</label>
                    <input
                        type="color"
                        id="color"
                        name="favoriteColor"
                        value={favoriteColor}
                        onChange={onChange}
                        placeholder="Favorite Color"
                        style={{ backgroundColor: favoriteColor }}
                    />
                    <br />
                    {errors.favoriteColor && (
                        <small className={styles.error}>
                            {errors.favoriteColor}
                        </small>
                    )}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="weight">Weight </label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={weight}
                        onChange={onChange}
                        placeholder="Weight in Kg"
                    />
                    <br />
                    {errors.weight && (
                        <small className={styles.error}>{errors.weight}</small>
                    )}
                </div>
                <div>
                    <label htmlFor="country">Country</label> <br />
                    <select
                        name="country"
                        onChange={onChange}
                        id="country"
                        value={country}
                    >
                        {selectOptions}
                    </select>
                    <br />
                    {errors.country && (
                        <small className={styles.error}>{errors.country}</small>
                    )}
                </div>

                <div>
                    <p>Gender</p>
                    <div>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="Female"
                            onChange={onChange}
                            checked={gender === "Female"}
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div>
                        <input
                            id="male"
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={onChange}
                            checked={gender === "Male"}
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input
                            id="other"
                            type="radio"
                            name="gender"
                            value="Other"
                            onChange={onChange}
                            checked={gender === "Other"}
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                    <br />
                    {errors.gender && (
                        <small className={styles.error}>{errors.gender}</small>
                    )}
                </div>

                <div>
                    <p>Select your skills</p>
                    <div>
                        <input
                            type="checkbox"
                            id="html"
                            name="html"
                            onChange={onChange}
                        />
                        <label htmlFor="html">HTML</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="css"
                            name="css"
                            onChange={onChange}
                        />
                        <label htmlFor="css">CSS</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="javascript"
                            name="javascript"
                            onChange={onChange}
                        />
                        <label htmlFor="javascript">JavaScript</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label> <br />
                    <textarea
                        id="bio"
                        name="bio"
                        value={bio}
                        onChange={onChange}
                        cols="120"
                        rows="10"
                        placeholder="Write about yourself ..."
                    />
                    <br />
                    {errors.bio && (
                        <small className={styles.error}>{errors.bio}</small>
                    )}
                </div>

                <div>
                    <input type="file" name="file" onChange={onChange} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Day22Form;
