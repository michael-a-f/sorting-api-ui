class SortFrame {
    list: number[];
    highlights: Record<string, number>;

    constructor(list: number[], highlights: Record<string, number>) {
        this.list = list;
        this.highlights = highlights;
    }
}

export default SortFrame;