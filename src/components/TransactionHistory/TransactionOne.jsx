import { Row } from "./TransactionOne.styled";

export const TransactionOne = ({ items }) => {
	return items.map(({id, type,amount, currency }) => {
		return (
			<Row key={id}>
				<td>{type}</td>
				<td>{amount}</td>
				<td>{currency }</td>
			</Row>
		)
	})
};

