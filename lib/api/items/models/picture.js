// Picture model

function Picture(id, large, small) {
    this.id = id,
    this.variations = {
        large: large,
        small: small
    };
}

module.exports = Picture;
