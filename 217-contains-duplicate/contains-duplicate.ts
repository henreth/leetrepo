function containsDuplicate(nums: number[]): boolean {
    //set gets all of the possible values in given array
    //.size gets the length
    const set = new Set<number>(nums);
    return (set.size < nums.length);
};