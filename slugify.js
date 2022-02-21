export function slugify(string) {

    return string
    .toLowerCase()
    .replace('ü', 'ue');
}