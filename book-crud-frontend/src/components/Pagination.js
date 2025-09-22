export default function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i+1}
          onClick={() => onPageChange(i+1)}
          style={{ fontWeight: currentPage === i+1 ? 'bold' : 'normal' }}
        >
          {i+1}
        </button>
      ))}
    </div>
  );
}
