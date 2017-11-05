import { range } from 'ramda';

/**
 * Get list of nulls
 * @sig Number -> [Null]
 * @param {Number} nFrames number of frames
 * @return {[null]} array of nulls
 */
const getNulls = (nFrames) => range(0, nFrames).map(_ => null);

/**
 * Add nFrames delay to the end of each line
 * @sig Number -> [a] -> [a]
 * @param {*} nFrames number of frames
 * @return {Function} concat lineChunks and range of nulls
 */
const addDelay = (nFrames) => lines => lines.concat(getNulls(nFrames));

export default addDelay;
