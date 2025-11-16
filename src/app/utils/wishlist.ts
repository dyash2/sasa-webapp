// utils/wishlist.ts
export const getWishlist = (): string[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("wishlist");
  return data ? JSON.parse(data) : [];
};

export const addToWishlist = (id: string) => {
  const wishlist = getWishlist();
  if (!wishlist.includes(id)) {
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (id: string) => {
  const wishlist = getWishlist().filter(item => item !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const isInWishlist = (id: string) => {
  return getWishlist().includes(id);
};
