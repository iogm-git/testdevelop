import { fetchDataSekolah, fetchTambahSekolah } from "../service/api";
import { fetchActions } from "./utils";

export const dataSekolahActions = fetchActions('DATA_SEKOLAH', fetchDataSekolah)
export const tambahSekolahActions = fetchActions('TAMBAH_SEKOLAH', fetchTambahSekolah)