import PropTypes from 'prop-types'; 
import { Table } from './TransactionHistory.styled';
import { TransactionOne } from './TransactionOne'

export const TransactionHistory = ({items}) => {
			return (
				<Table className="transaction-history">
					<thead>
						<tr>
							<th>Type</th>
							<th>Amount</th>
							<th>Currency</th>
						</tr>
					</thead>

					<tbody>
						<TransactionOne items={items} />
					</tbody>
				</Table>
			);
	
};

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object)
}

