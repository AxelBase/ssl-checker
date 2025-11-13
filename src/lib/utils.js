export function getStatusColor(days) {
  if (days <= 0) {
    return 'danger';
  } else if (days < 15) {
    return 'danger';
  } else if (days <= 30) {
    return 'warning';
  } else {
    return 'success';
  }
}