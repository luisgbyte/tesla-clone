import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsSection, ModelsWrapper } from '../Model';
import { Container } from './styles';

const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    <ModelsSection
                        modelName="Model One"
                        overlayNode={
                            <DefaultOverlayContent
                                label="Model One"
                                description="Order Online for Delivery"
                            />
                        }
                    />
                </div>
            </ModelsWrapper>
        </Container>
    )
}

export default Page;