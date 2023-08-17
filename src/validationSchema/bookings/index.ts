import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  job_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
