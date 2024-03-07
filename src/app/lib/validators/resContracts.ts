import { toast } from 'sonner';

interface IOnSuccessProps {
  status?: number;
  message?: string;
  cb?: () => void;
  showToast?: boolean;
}

export function isSuccess({
  status = 200,
  message = 'Success!',
  cb,
  showToast = true,
}: IOnSuccessProps) {
  if (showToast) {
    toast.success(message);
  }

  if (cb) {
    cb();
  }

  return {
    status,
    body: {
      message,
    },
  };
}

interface IOnErrorProps {
  status?: number;
  message?: string;
  cb?: () => void;
  showToast?: boolean;
}

export function isError({
  status = 500,
  message = 'Error!',
  cb,
  showToast = true,
}: IOnErrorProps) {
  if (showToast) {
    toast.error(message);
  }

  if (cb) {
    cb();
  }

  return {
    status,
    body: {
      message,
    },
  };
}
