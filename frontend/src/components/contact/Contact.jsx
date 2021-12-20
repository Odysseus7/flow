import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

function Contact(props) {
	const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICEID;
	const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATEID;
	const USER_ID = process.env.REACT_APP_EMAIL_USERID;

	const handleOnSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
			(result) => {
				Swal.fire({
					icon: "success",
					title: "Yay, thank you for reaching out to me!",
				});
			},
			(error) => {
				Swal.fire({
					icon: "error",
					title: "Ooops, something went wrong",
					text: error.text,
				});
			}
		);
		e.target.reset();
	};

	return (
		<div className="contact__container">
			<Form onSubmit={handleOnSubmit}>
				<Form.Field
					id="form-input-control-email"
					control={Input}
					label="Email"
					name="sender_email"
					placeholder="Email…"
					required
					icon="mail"
					iconPosition="left"
				/>
				<Form.Field
					id="form-input-control-last-name"
					control={Input}
					label="Name"
					name="sender_name"
					placeholder="Name…"
					required
					icon="user circle"
					iconPosition="left"
				/>
				<Form.Field
					id="form-textarea-control-opinion"
					control={TextArea}
					label="Message"
					name="sender_message"
					placeholder="Message…"
					required
				/>
				<Button type="submit" color="green">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default Contact;
