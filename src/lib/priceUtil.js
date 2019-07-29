// We'll use 2 decimals to present AND PARSE price
const NUM_DECIMALS = 2;
const DECIMAL_SEPARATOR = '.';

export const parsePrice = priceString => {
	// if we have NUM_DECIMALS decimals AFTER  DECIMAL_SEPARATOR, multiplier is 0, this way we add as many zeroes as neeced
	const multiplier = Math.max(
		1,
		(NUM_DECIMALS -
			(priceString.replace(/[^0-9.]/g, '').split(DECIMAL_SEPARATOR)[1] || '')
				.length) *
			10
	);

	return priceString.replace(/\D/g, '') * multiplier;
};


export const formatPrice = priceNumber => {

}
