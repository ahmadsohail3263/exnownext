"use client";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useUser } from "@/src/context";
import { parseISO, format, isValid } from "date-fns";

const MyForm = () => {
  const { createUser } = useUser();
  const formatDate = (date) => {
    if (!date) {
      return ""; // If the date is an empty string, return an empty string
    }
    const parsedDate = new Date(date);
    if (isValid(parsedDate)) {
      return format(parsedDate, "yyyy-MM-dd");
    }
    return ""; // Return an empty string if the date is invalid
  };
  const { control, handleSubmit, register, watch, reset, getValues, setValue } =
    useForm({
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        userType: "Standarad",
        expertise: {
          consultant_experience: false,
          certifications: [],
          credentials: [],
          other: "",
        },
        currentStudent: false,
        phoneNumber: "",
        bio: "",
        interests: "",
        workExperience: [
          {
            company_name: "",
            role: {
              title: "",
              start_date: "",
              end_date: "",
              department: "",
              responsibilities: [],
              skills: [],
            },
          },
        ],
        education: [
          {
            school_name: "",
            degree: "",
            major: "",
            minor: "",
            relevant_coursework: [],
            start_date: "",
            end_date: "",
          },
        ],
        scheduling: {
          availabilityOptions: [
            {
              day: "",
              duration: "",
              end: "",
              start: "",
            },
          ],
        },
        payment: {
          hourlyRate: 0,
        },
        agreementToTerms: true,
        isActive: true,
      },
    });

  useEffect(() => {
    // Set default values using reset
    reset({
      userType: "Standard", // Default value for userType
    });
  }, [reset]);

  const {
    fields: workFields,
    append: appendWork,
    remove: removeWork,
  } = useFieldArray({
    control,
    name: "workExperience",
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const {
    fields: availabilityFields,
    append: appendAvailability,
    remove: removeAvailability,
  } = useFieldArray({
    control,
    name: "scheduling.availabilityOptions",
  });
  const calculateDuration = (start, end) => {
    const startTime = new Date(`1970-01-01T${start}:00`);
    const endTime = new Date(`1970-01-01T${end}:00`);
    const diff = (endTime - startTime) / 60000; // Difference in minutes

    return diff > 0 ? diff : 0; // Return 0 if the duration is negative
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    createUser(data);
  };

  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold my-5 text-center">Register Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold ">Personal Information</h2>
        <div className="sm:grid grid-cols-2 gap-x-4">
          <Input {...register("firstName")} title="First Name" />
          <Input {...register("lastName")} title="Last Name" />
          <Input {...register("email")} type="email" title="Email" />
          <div>
            <label className={`block text-sm font-medium text-gray-700`}>
              Current Student
            </label>
            <select
              {...register("currentStudent")}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm`}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <Input {...register("phoneNumber")} title="Phone Number" />
          <Input {...register("password")} type="password" title="Password" />
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              row={1}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm`}
              {...register("bio")}
              title="Bio"
            />
          </div>
          <Input {...register("interests")} title="Interests" />
          <Controller
            name="payment.hourlyRate"
            control={control}
            render={({ field }) => (
              <Input type="number" {...field} title="Hourly Rate" />
            )}
          />
          <div>
            <label className={`block text-sm font-medium text-gray-700`}>
              User Type
            </label>
            <select
              {...register("userType")}
              className={` block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm`}
            >
              <option value="Expert">Expert</option>
              <option value="Standard">Standard</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>
        {/* <Input
        {...register("userType")}
        title="User Type"
      /> */}
        <h2 className="text-xl font-bold mt-4">Expertise</h2>
        <div className="sm:grid grid-cols-2 gap-x-4">
          <div>
            <label className={`block text-sm font-medium text-gray-700`}>
              Consultant Experience
            </label>
            <select
              {...register("expertise.consultant_experience")}
              className={` mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm`}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <Controller
            name="expertise.certifications"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                title="Certifications"
                placeholder="(comma separated)"
                onChange={(e) =>
                  setValue(
                    "expertise.certifications",
                    e.target.value.split(",").map((item) => item.trim())
                  )
                }
              />
            )}
          />
          <Controller
            name="expertise.credentials"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                title="Credentials"
                placeholder="(comma separated)"
                onChange={(e) =>
                  setValue(
                    "expertise.credentials",
                    e.target.value.split(",").map((item) => item.trim())
                  )
                }
              />
            )}
          />
          <Input {...register("expertise.other")} title="Other Expertise" />
        </div>

        <h2 className="text-xl font-bold">Work Experience</h2>
        {workFields.map((field, index) => (
          <div key={field.id}>
            <div className="sm:grid grid-cols-3 gap-x-4">
              <Controller
                name={`workExperience.${index}.company_name`}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Company Name"
                    title="Company Name"
                  />
                )}
              />
              <Controller
                name={`workExperience.${index}.role.title`}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Role Title"
                    title="Job Title"
                  />
                )}
              />
              <Controller
                name={`workExperience.${index}.role.start_date`}
                control={control}
                render={({ field: { value, onChange, ...rest } }) => (
                  <Input
                    type="date"
                    {...rest}
                    value={formatDate(value)}
                    title="Start Date"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const dateWithTime = `${inputValue}T00:00:00`; // Add default time
                      onChange(dateWithTime); // Set the value with the appended time
                    }}
                  />
                )}
              />
              <Controller
                name={`workExperience.${index}.role.end_date`}
                control={control}
                render={({ field: { value, onChange, ...rest } }) => (
                  <Input
                    type="date"
                    {...rest}
                    value={formatDate(value)}
                    title="End Date"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const dateWithTime = `${inputValue}T00:00:00`; // Add default time
                      onChange(dateWithTime); // Set the value with the appended time
                    }}
                  />
                )}
              />
              <Controller
                name={`workExperience.${index}.role.department`}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Department"
                    title="Department"
                  />
                )}
              />
              <Controller
                name={`workExperience.${index}.role.responsibilities`}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    title="Responsibilities"
                    placeholder="(comma separated)"
                    onChange={(e) =>
                      setValue(
                        `workExperience.${index}.role.responsibilities`,
                        e.target.value.split(",").map((item) => item.trim())
                      )
                    }
                  />
                )}
              />

              <Controller
                name={`workExperience.${index}.role.skills`}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    title="Skills"
                    placeholder="(comma separated)"
                    onChange={(e) =>
                      setValue(
                        `workExperience.${index}.role.skills`,
                        e.target.value.split(",").map((item) => item.trim())
                      )
                    }
                  />
                )}
              />
            </div>
            <div className="flex gap-x-4">
              <Button
                type="button"
                onClick={() => removeWork(index)}
                label="Remove Experience"
              />
              <Button
                type="button"
                onClick={() =>
                  appendWork({
                    company_name: "",
                    role: {
                      title: "",
                      start_date: "",
                      end_date: "",
                      department: "",
                      responsibilities: [],
                      skills: [],
                    },
                  })
                }
                label="Add Work Experience"
              />
            </div>
          </div>
        ))}
        <h2 className="text-xl font-bold mt-4">Education</h2>
        {educationFields.map((field, index) => (
          <div key={field.id}>
            <div className="sm:grid grid-cols-3 gap-x-4">
              <Controller
                name={`education.${index}.school_name`}
                control={control}
                render={({ field }) => <Input {...field} title="School Name" />}
              />
              <Controller
                name={`education.${index}.degree`}
                control={control}
                render={({ field }) => <Input {...field} title="Degree" />}
              />
              <Controller
                name={`education.${index}.major`}
                control={control}
                render={({ field }) => <Input {...field} title="Major" />}
              />
              <Controller
                name={`education.${index}.minor`}
                control={control}
                render={({ field }) => <Input {...field} title="Minor" />}
              />
              <Controller
                name={`education.${index}.relevant_coursework`}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    title="Relevant Coursework"
                    placeholder="(comma separated)"
                    onChange={(e) =>
                      setValue(
                        `education.${index}.relevant_coursework`,
                        e.target.value.split(",").map((item) => item.trim())
                      )
                    }
                  />
                )}
              />
              <Controller
                name={`education.${index}.start_date`}
                control={control}
                render={({ field: { value, onChange, ...rest } }) => (
                  <Input
                    type="date"
                    {...rest}
                    value={formatDate(value)}
                    title="End Date"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const dateWithTime = `${inputValue}T00:00:00`; // Add default time
                      onChange(dateWithTime); // Set the value with the appended time
                    }}
                  />
                )}
              />
              <Controller
                name={`education.${index}.end_date`}
                control={control}
                render={({ field: { value, onChange, ...rest } }) => (
                  <Input
                    type="date"
                    {...rest}
                    value={formatDate(value)}
                    title="End Date"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const dateWithTime = `${inputValue}T00:00:00`; // Add default time
                      onChange(dateWithTime); // Set the value with the appended time
                    }}
                  />
                )}
              />
            </div>
            <div className="flex gap-x-4">
              <Button
                type="button"
                onClick={() => removeEducation(index)}
                label="Remove Education"
              />
              <Button
                type="button"
                onClick={() =>
                  appendEducation({
                    school_name: "",
                    degree: "",
                    major: "",
                    minor: "",
                    relevant_coursework: [],
                    start_date: "",
                    end_date: "",
                  })
                }
                label="Add Education"
              />
            </div>
          </div>
        ))}
        <h2 className="text-xl font-bold mt-4">Scheduling</h2>
        {availabilityFields.map((field, index) => (
          <div key={field.id}>
            <div className="sm:grid grid-cols-4 gap-x-4">
              <div>
                <label>Day</label>
                <select
                  {...register(`scheduling.availabilityOptions.${index}.day`)}
                  className={` block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm`}
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <Controller
                name={`scheduling.availabilityOptions.${index}.start`}
                control={control}
                render={({ field: { value, onChange, ...rest } }) => (
                  <Input
                    type="time"
                    {...rest}
                    value={value}
                    title="Start Time"
                    onChange={(e) => {
                      const startTime = e.target.value;
                      onChange(startTime); // Set start time

                      const endTime = getValues(
                        `scheduling.availabilityOptions.${index}.end`
                      );
                      if (endTime) {
                        const duration = calculateDuration(startTime, endTime);
                        setValue(
                          `scheduling.availabilityOptions.${index}.duration`,
                          duration
                        );
                      }
                    }}
                  />
                )}
              />
              <Controller
                name={`scheduling.availabilityOptions.${index}.end`}
                control={control}
                render={({ field: { value, onChange, ...rest } }) => (
                  <Input
                    type="time"
                    {...rest}
                    value={value}
                    title="End Time"
                    onChange={(e) => {
                      const endTime = e.target.value;
                      onChange(endTime); // Set end time

                      const startTime = getValues(
                        `scheduling.availabilityOptions.${index}.start`
                      );
                      if (startTime) {
                        const duration = calculateDuration(startTime, endTime);
                        setValue(
                          `scheduling.availabilityOptions.${index}.duration`,
                          duration
                        );
                      }
                    }}
                  />
                )}
              />
              <Controller
                name={`scheduling.availabilityOptions.${index}.duration`}
                control={control}
                render={({ field }) => (
                  <Input
                    type="number"
                    {...field}
                    title="Duration (minutes)"
                    readOnly
                  />
                )}
              />
            </div>
            <div className="flex gap-x-4">
              <Button
                type="button"
                onClick={() => removeAvailability(index)}
                label="Remove Availability"
              />
              <Button
                type="button"
                onClick={() =>
                  appendAvailability({
                    day: "",
                    start: "",
                    end: "",
                    duration: "",
                  })
                }
                label="Add Availability"
              />
            </div>
          </div>
        ))}

        <div className="flex gap-x-4 mt-4">
          <Controller
            name="agreementToTerms"
            control={control}
            render={({ field }) => <input type="checkbox" {...field} />}
          />
          <label>Agree to Terms and Conditions</label>
        </div>

        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
};

export default MyForm;
