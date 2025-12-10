import { useState, useRef } from "react";
import styles from './index.module.css';
import imgEspecialidade from "../../assets/certificado_especialidade_antigoN.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { registrarLog } from "../../services/registerLogs.js";

export default function CardCertificado() {

    const [form, setForm] = useState({
        Nome: '',
        Especialidades: '',
    });


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const captureRef = useRef(null);

    const gerarPDF = async () => {
        const element = captureRef.current;

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'pt',
            format: [canvas.width, canvas.height],
        });
        // const pdf = new jsPDF("p", "mm", "a4");

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
        pdf.save(`Especialidade ${form.Nome}.pdf`);
        await registrarLog(form.Nome, form.Especialidades);
    }

    return (
        <div className={styles.formcontainer}>
            <form className={styles.form}>
                <label className={styles.inputlabel}>Nome</label>
                <input
                    name="Nome"
                    placeholder="Nome"
                    value={form.Nome}
                    onChange={handleChange}
                    className={styles.input} />
                <label className={styles.inputlabel}>Especialidades</label>
                <input
                    name="Especialidades"
                    placeholder="Especialidades"
                    value={form.Especialidades}
                    onChange={(e) => {
                        const text = e.target.value;
                        if (text.length <= 200) { // limite aproximado
                            setForm({ ...form, Especialidades: text });
                        }
                    }}
                    className={styles.input}/>
                <button type="button" onClick={gerarPDF} className={styles.button}>
                    Gerar PDF
                </button>
            </form>
            <div className={styles.previewBox} ref={captureRef}>
                <img src={imgEspecialidade} alt="Certificado Especialidade" width="900" />
                <div className={styles.nome} style={{ textTransform: 'uppercase' }}>
                    {form.Nome}
                </div>

                <div className={styles.especialidade} style={{ textTransform: 'uppercase' }}>
                    <span className={styles.label}>
                        concluiu a(s) especialidade(s) de:
                    </span>
                    <span className={styles.valor}>
                        {` `}  {/* Faz com que o input começe com um espaço */}
                        {form.Especialidades}
                    </span>
                    <span style={{ display: 'inline', color: '#f78f1e' }}>
                        .
                    </span>
                </div>
            </div>
        </div>
    );
}