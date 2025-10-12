import styles from "@/components/styles/ProgressBar.module.css"

interface props{
    current: number;
    total: number;
}

export default function ProgressBar({ current, total }: props) {
    const progress = (current / total) * 100;

    return (
        <div className={styles.progress_bar}>
            <div className={styles.progression_color}
            style={{ width: `${progress}%` }}
            />
        </div>
    );
}