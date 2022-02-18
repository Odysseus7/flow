import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllBooks } from "../../../actions/booksActions";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

class BooksPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: this.props.books,
		};
	}

	componentDidMount() {
		this.props.fetchAllBooks();
	}

	componentDidUpdate(prevProps) {
		if (this.props.books !== prevProps.books) {
			this.setState({ books: this.props.books });
		}
	}

	updateBookList = (book) => {
		this.setState({ books: [...this.state.books, book] });
	};

	render() {
		return (
			<main>
				<section className="admin__courses__container">
					<EditBook books={this.state.books} />
					<AddBook updateBookList={this.updateBookList} />
				</section>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
		books: state.books,
	};
};

export default connect(mapStateToProps, { fetchAllBooks })(BooksPage);
