import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions/booksActions";
import BookCard from "./BookCard";

class BookList extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	renderBooks() {
		const books = this.props.books;

		return books.map((book) => (
			<BookCard
				key={book._id}
				name={book.name}
				description={book.description}
				author={book.author}
				image={book.image}
				URL={book.URL}
			/>
		));
	}

	render() {
		return (
			<section className="main main__books">
				<main className="books__container">{this.renderBooks()}</main>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
		books: state.books,
	};
};

export default connect(mapStateToProps, { fetchBooks })(BookList);
