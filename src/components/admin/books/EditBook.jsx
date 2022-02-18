import React, { Component } from "react";
import BookListItem from "./BookListItem";

class EditBook extends Component {
	renderBooks(books, isActive) {
		return books.map((book) => (
			<BookListItem
				key={book._id}
				id={book._id}
				name={book.name}
				description={book.description}
				author={book.author}
				image={book.image}
				URL={book.URL}
				status={book.status}
				isActive={isActive}
			/>
		));
	}

	componentDidUpdate(prevProps) {
		if (this.props.books !== prevProps.books) {
			this.getActiveBooks();
		}
	}

	getActiveBooks() {
		const activeBooks = this.props.books.filter(
			(book) => book.status === "active"
		);

		return this.renderBooks(activeBooks, true);
	}

	getInActiveBooks() {
		const inActiveBooks = this.props.books.filter(
			(book) => book.status === "inactive"
		);
		return this.renderBooks(inActiveBooks, false);
	}

	render() {
		return (
			<section className="admin__courses__edit">
				<h1>Edit books</h1>
				<article className="admin__courses__list">
					{this.getActiveBooks()}
					{this.getInActiveBooks()}
				</article>
			</section>
		);
	}
}

export default EditBook;
