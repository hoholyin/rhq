exports.getRange = (inSheet, fromCol, toCol, atRow) => {
    return inSheet + "!" + fromCol + atRow + ":" + toCol + atRow
}
