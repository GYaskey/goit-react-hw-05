import Swal from 'sweetalert2';

const ErrorMessage = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#0abab5',
    didOpen: toast => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  Toast.fire({
    icon: 'error',
    color: '#fff',
    iconColor: '#fff',
    title: 'Unfortunately the request has failed',
  });
};

export default ErrorMessage;
